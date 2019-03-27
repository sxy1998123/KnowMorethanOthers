from flask import Flask, jsonify, render_template, request

import flask
app = Flask(__name__)
@app.route('/test', methods=['GET', 'POST'])
def test_post():
   return 'aaa'


if __name__ == "__main__":

    app.run()