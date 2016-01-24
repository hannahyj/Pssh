## How to install
In Chrome, open up chrome://extensions/ in your browser and click “Developer mode” in the top right. Click “Load unpacked extension…” and select the extension’s directory.

## Inspiration
One of our friends, who may or may not be on the team, is quite the shopping aficionado. We built SpendWise to help her get an idea of the effect that her next online purchase will have on her bank account.

## What it does
SpendWise is a Chrome extension that adds an info box on checkout pages. Using the Plaid API, this info box is populated with a user's bank account balance before and after making a purchase.

## How we built it
We first wrote Javascript in our Chrome extension that searches online shopping checkout pages for a total cost. We invoke the Plaid API to ring up a user's bank account balance details. Finally, we perform complex mathematics to determine how much money will remain in a user's account after the purchase.

## Challenges we ran into
There were a lot of features that we wanted to add to the app, so a big challenge for us was prioritizing features given the restricted time frame of the hackathon.

## Accomplishments that we're proud of
Building our first Chrome extension! We look forward to putting it up on the Chrome Web Store.

## What we learned
Most importantly, we learned how to take a simple idea and turn it into a product with colorful features that we can use. It was also great learning how to modify a web page using a Chrome extension.

## What's next for SpendWise
While SpendWise provides a good proof of concept for our original idea, we'd like to take it several steps further. We think SpendWise has the potential to become a full personalized companion for online shopping that helps users build healthy shopping habits. A few immediate features will keep us on track such as: allowing users to set a budget for specific areas, displaying sum of expenses over the past X days, notifying users how long they've been on shopping websites.
