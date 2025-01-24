import time
import random
from flask import Flask, jsonify, send_from_directory, redirect
from flask_cors import CORS
from duckduckgo_search import DDGS

app = Flask(__name__, static_folder="../frontend/dist", static_url_path="/")

CORS(app)

# Retry function to handle rate limits and retries
def retry_request(query, search_type="text", max_retries=3):
    attempts = 0
    while attempts < max_retries:
        try:
            results = []
            with DDGS() as ddgs:
                if search_type == "text":
                    # Fetching text-based web results
                    results = list(ddgs.text(query, max_results=10))
                elif search_type == "answers":
                    # Fetching answer-style results
                    results = list(ddgs.answers(query))
                elif search_type == "images":
                    # Fetching image results
                    results = list(ddgs.images(query, max_results=10))
                elif search_type == "videos":
                    # Fetching video results
                    results = list(ddgs.videos(query, max_results=10))
                elif search_type == "news":
                    # Fetching news results
                    results = list(ddgs.news(query, max_results=10))
                return results
        except Exception as e:
            print(f"Error: {str(e)}. Retrying...")
            attempts += 1
            # Exponential backoff with a random delay
            time.sleep(random.randint(2, 5))
    return {"error": "Rate limit exceeded, please try again later"}

# API routes
@app.route("/web/<query>", methods=['GET'])
def web_search(query):
    results = retry_request(query, search_type="text")
    return jsonify(results)

@app.route("/ans/<query>", methods=['GET'])
def ans_search(query):
    results = retry_request(query, search_type="answers")
    return jsonify(results)

@app.route("/images/<query>", methods=['GET'])
def images_search(query):
    results = retry_request(query, search_type="images")
    return jsonify(results)

@app.route("/videos/<query>", methods=['GET'])
def videos_search(query):
    results = retry_request(query, search_type="videos")
    return jsonify(results)

@app.route("/news/<query>", methods=['GET'])
def news_search(query):
    results = retry_request(query, search_type="news")
    return jsonify(results)

# Route to serve React app
# @app.route('/', defaults={'path': ''})
# def serve_frontend(path):
    # return send_from_directory("../frontend/dist", "index.html")



@app.errorhandler(404)
def page_not_found(e):
    return redirect("/")
    

if __name__ == '__main__':
    app.run(debug=True)
