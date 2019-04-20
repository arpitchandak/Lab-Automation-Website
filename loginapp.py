from flask import Flask,render_template,request

app = Flask(__name__)
@app.route('/')
def hello():
	return render_template("login.html")

@app.route('/login',methods=["post"])
def fb():
	name = request.form["username"]
	password = request.form["password"]
	print(type(password))
	orname = "arpit"
	orpass = "123"
	if name == orname and password == orpass:
		print("hlo")
		return render_template("new.html",name=name , password=password)
	else:
		print("byr=e")
		return render_template("x.html")
if __name__ == '__main__':
	app.run(port=6050,debug = 2)
