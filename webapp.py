from flask import Flask,render_template #import flask library
app=Flask(__name__)         #name to app obj
@app.route('/')             #first line / represents the route dir 
def index():                 #definiton of '/' is home its is mandetery in this code 
    return render_template('index.html')    #content of that page...
@app.route('/about/')       #another page with that quated name we can create a page
def about():                #page definition
    return render_template('about.html')
@app.route('/registration/')       #another page with that quated name we can create a page
def registration():                #page definition
    return render_template('registration.html')
if __name__ == '__main__':      #check wether the ___name__ == __main__ conforming only devoloper can debug the code... if this command is not here anyone can access and debug the code..
    app.run() 