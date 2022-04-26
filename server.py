#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path

from flask import Flask


app = Flask(
  __name__,
  static_folder='./assets',
  template_folder='./html'
)


def render_html(html_file, **kwargs):
  return Path(html_file).read_text(encoding='utf-8')


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
  return jsonify('pong!')


@app.route("/", methods=['GET'])
def index():
  return render_html('./html/index.html')

@app.route("/ar", methods=['GET'])
def ar():
  return render_html('./html/ar.html')

if __name__ == '__main__':
  app.run(
    debug = True,
    host="0.0.0.0",
    port=8080
  )
