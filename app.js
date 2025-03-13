users = [];
events = [];

const addEvent = function(event) {
    events.push(event);
};

const addUser = function(user) {
    users.push(user);
};

const viewEvents = function(user) {
    return events.filter(event => event.userEmail === user.email);
};

const registerUser = function(name, email, password) {
    users.push({ name, email, password });
};

module.exports = { users, addUser, addEvent, registerUser };




    // addUser({ name : "doc", email : "doc@gmail.com", password : "doc123" });

    // addEvent({
    //     id : 1,
    //     userEmail : "doc@gmail.com",
    //     name : "A real bad event",
    //     description : "you should not be coming to this event",
    //     date : new Date(2025,10,11),
    //     reminderTime : new Date(2025, 10, 10),
    //     category : "Meetings"
    // });


