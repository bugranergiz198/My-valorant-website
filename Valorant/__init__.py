from flask import Flask,render_template,flash,redirect,url_for,session,logging,request

from wtforms import Form,StringField,PasswordField,TextAreaField,validators
from passlib.hash import sha256_crypt

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("valorant.html")
@app.route("/agents")
def agent():
    return render_template("valorantagents.html")
@app.route("/maps")
def map():
    return render_template("valorant maps.html")
@app.route("/news")
def new():
    return render_template("newsvalo.html")
@app.route("/agents")
def algo2():
    return render_template("valorantagents.html")
@app.route("/property")
def property():
    return render_template("valorantproperties.html")
@app.route("/leadership-table")
def leadership():
    return render_template("valorant_leadershiptable.html")
@app.route("/registerpage")
def register():
    return render_template("valorantregisterpage.html")
@app.route("/supportpage")
def support():
    return render_template("valosupport.html")
@app.route("/armory")
def armor():
    return render_template("valorantarmory.html")


if __name__ == "__main__":
    app.run(debug = True)