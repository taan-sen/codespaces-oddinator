from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html", title="Hello")


@app.route("/api/is-odd", methods=["POST"])
def is_odd():
    data = request.get_json()
    input_str = data.get("input")

    if input_str is None or not isinstance(input_str, str):
        return jsonify({"error": "Invalid input format"}), 400

    if not input_str.isdigit():
        return jsonify({"error": "Not a number"}), 400

    last_digit = int(input_str[-1])
    return jsonify({"isOdd": last_digit % 2 == 1}), 200