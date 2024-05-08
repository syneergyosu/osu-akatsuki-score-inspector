# Import Flask and render_template function from flask
from flask import Flask, render_template

# Create an instance of the Flask class
app= Flask(__name__)

# Define a route for the home page
@app.route('/')
def home():
    # Render the home.html template
    return render_template('home.html')

# Run the application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)