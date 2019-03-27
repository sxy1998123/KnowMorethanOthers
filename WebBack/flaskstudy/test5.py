# -*- coding: utf-8 -*-
from flask import Flask, jsonify, render_template, request
import classify
import os, base64
import json

app = Flask(__name__)  # 实例化app对象
image = '001.jpg'
testInfo = {}
testInfo['name'] = 'xiaoming'
testInfo['age'] = '28'

@app.route('/testpost', methods=['GET', 'POST'])
def test_post():
    if request.method=='POST':
        # print(request.get_json())
        rev=request.get_json()['Img']
        # print(rev)
        img_data = base64.b64decode(rev)
        with open('001.jpg', 'wb') as f:
            f.write(img_data)
        # result=   classify.run(image)
        # print(request.get_data())
        res=classify.run(image)
        return jsonify({'data': res})
    else:
        return  'error'


# @app.route('/main')

# @app.route('/flaskstudy/webFront/App.html', methods=['GET', 'POST'])  # 路由
# def test_post():
#     return 'eee'
    # if request.method=='POST':
    #     print("111")
    #     return jsonify({
    #             "status":1,
    #             "message":"success",
    #     })
    # else:
    #   return 'error'
#
#flaskpython2

@app.route('/')
def index():

    return render_template('App.html')


# @app.route('/index')
# def index():
#     return render_template('index.html')


if __name__ == "__main__":

    app.jinja_env.auto_reload = True
    app.run(debug=True)