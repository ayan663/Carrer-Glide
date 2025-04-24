from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForTokenClassification, pipeline

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

model_name = "tner/roberta-base-ontonotes5"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForTokenClassification.from_pretrained(model_name)
ner_pipeline = pipeline("ner", model=model, tokenizer=tokenizer, grouped_entities=True)

@app.route("/parse", methods=["POST"])
def parse_resume():
    data = request.json
    resume_text = data.get("resume_text", "")
    entities = ner_pipeline(resume_text)
    return jsonify(entities)

if __name__ == "__main__":
    app.run(debug=True)
