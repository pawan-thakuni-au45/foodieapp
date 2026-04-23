lifting this stae in reaact
controlled component and uncontrolled component
redux usages immer behind the seen
Fix this:
Add README to every project
Include:
What it does
Tech stack
Screenshots
Live demo link

====================
3 types of testing devloper can do,as a dev we will focus on first 2 type of testing
1-Unit testing->1 unit of our code we test like only header
2-integration testing
3-end to end testing-as soon as the user land on the website to the leave the website

===============librabry we will use is..
react test library- since create-react -app gives us testing feature by default, but we are using parcel bundler so have to 
install it manually(it uses jest framework)
2-> 

#setting up test in our app
    -install react testing library
    -install jest
-install babel anf create configure file for it.
-disable Babel transpilation in Parcel create .parce file(parcel docs)
-jest congiruation=========(npx jest --init)
-install jsdom library-
-created__testes__ folder for testing(dunder test(__))
-install react/babel ==to make jsx works in test cases
add react/babel inside babel config
--install @testing-library/jest-dom ====
========everytime in our test folder we render somthing,we query somthing and we assert something
