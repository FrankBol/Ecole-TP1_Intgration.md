# pip install flask

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def acceuil():
    return render_template("acceuil.html")

@app.route("/gin")
def formulaire():
    return render_template("gin.html")

@app.route("/concour")
def table():
    return render_template("concour.html")

if __name__ == "__main__":
    app.run(debug=True)


