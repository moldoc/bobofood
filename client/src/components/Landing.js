import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: '#e0f2f1' }}>
        <p>Welcome to Nommotime!</p>
        <p>
          Have trouble deciding what to cook for dinner? Have a trouble
          remembering where a certain recipe was? Nommotime lets you add food
          items and their recipes to its database, to help you keep track of
          your dinner options. The "random food" -functionality returns a random
          recipe you have added, helping you come up with something to cook. By
          adding tags to your recipes, you can easily filter the foods the
          application will show you.
        </p>
        <p>
          Don't want to go through all the trouble of writing all the recipes to
          Nommotime? No worries! The application doesn't need full recipes, you
          can instead add only a reference/link to a book page/website where the
          recipe can be found. The main purpose of Nommotime is to help you
          decide what to cook, not to serve as a database for complete recipes.
        </p>
        <p> Log in with Google to get started!</p>
      </div>
    );
  }
}
