# pip install flask

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def acceuil():
    return render_template("acceuil.html")

@app.route("/formulaire")
def formulaire():
    return render_template("formulaire.html")

@app.route("/table")
def table():
    return render_template("table.html")

if __name__ == "__main__":
    app.run(debug=True)


