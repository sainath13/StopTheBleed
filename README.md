# StopTheBleed
App submission for Stop The Bleed hackathon 

## Hackathon link:
https://www.hackerearth.com/challenges/hackathon/stop-the-bleed-hackathon/
## Description
Looking at the themes I thought it would be better to come up with an app that unifies the three main parts of the functionality for a better experience. 1. Find a nearby class for learners and Create a class for instructors 2. Show incidents and share your story 3. Self-help section that is static in the app accessible all the times without internet

The video features the demo version of the app which has all the functionality. In the actual release, some part of the functionality will be available to only Instructors.

Please refer to video and screenshots for more details NOTES about DEMO: demo link is of the backend rest server. It will just show you data in json format. For testing the app ie. the product, Please follow the installation instructions.

### Future scope: 
1. Implement filters in search classes tab for new learners. 
2. Get location data from Learners and calculate the exact distance to the location of the class. 
3. Populate self help section with exact data that learners might need. Currently, it has some sample data. 
4. Integration with Facebook and Twitter for sharing "I have registered for the Stop The bleed class" and invite friends


### Setup instructions:
This is a react native project. steps to install the dependencies and run app: 
1. install react native `npm install -g react-native` 
2. Install the node modules by going inside the directory running `npm install`. 
3. based on your platform run the following `react-native run-ios` or  `react-native run-android`

### Note: 
For Android: You might need to install and setup andriod sdk and `ANDROID_HOME` 
For IOS: You need to install latest version of Xcode and dependencies.
