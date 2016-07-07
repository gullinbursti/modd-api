
// User structure describes a username on an IM service
class User {
  'messengerService' : String,  // name of the messenger service
  'chatId': [String]            // encrypted user identitier used by some IM services
  'username' : String           // username of user on im service
};


// Criteria structure describes game or user conditions under which a specified action should be taken
class GameExperienceCriteria {
  'level': String,                // take action at level or levels.  number, comma delimited, or range.  (ie. "3", "1,3,5", "1-5")
  'timePlayed': Number,           // take action at hours after usser started playing game
  'acheivement': String,          // take action when achivement occurs 
  'inAppPurchaseMade': String,    // take action after in-app purchase occurs
  'numberOfWatchers': Number,     // take action after user obtains a number of watchers
  'not': Boolean                  // take action if inverse of criteria is true
}



//**********************
//     API Verbs
//**********************

/**
 * Creates an account on MODD for a username on an IM service.
 * @param {User} User - user on an IM service
 * @returns {?} (a MODD user id?)
 */
signup (User)

/**
 * Associate a username on a game, game network, or gaming device with an IM user account
 * @param {User} User - user on an IM service
 * @param {String} GamerTag - username for a game, game network, or gaming device
 * @param {Game|GameNetwork|GameDevice} - Gaming entity on which GamerTag is used by user
 */
addGamerTag(User, GamerTag, [Game, Game Network, or GameDevice])

/**
 * Associcates a new username on an IM service with an existing MODD user account
 * @param {ModdUser} ModdUser - exieting user account on MODD system
 * @param {User} User - new username on IM service to associate with existing MODD user 
 */
connectAccount(ModdUser, User)

/**
 * Subscribes a user to recieve notifications of events for a Player, Game, or Team 
 * @param {User} - User to subscribe
 * @param {Player|Game|Team} - entity to subscribe to events for
 */
subscribe(User, [Player, Game, Team])


/**
 * Returns top player of a game
 * @param {Game} Game - game for which to retrieve top player
 * @returns {String} - username of top player of game (??)
 */
getTopPlayer(Game)

/**
 * Returns list of action names for Player, Game, or Team, that user can subscribe to
 * @param {Player|Game|Team} - entity to retrive list of actions for
 * @returns {String[]} - names of subscribable actions
 */
getActions([Player, Game, Team])


/**
 * Adds a context based help message to the system for a game that can be offered to user under described conditions 
 * @param {Game} Game - game to register help message for
 * @param {GameExperienceCriteria} GameExperienceCriteria - description of user's game experience context under which the help message is useful 
 * @param {String} HelpMessage - help message to be sent to user
 */
addHelp(Game, GameExperienceCriteria, HelpMessage)


/**
 * Adds conversation response strings to user's chats with bot based on keywords in the user's message
 * @param {Game} Game - game for which to register keyword based response strings
 * @param {Object} KeywordResponses - map of keyword strings user might say in chat with bot to canned responses for those keywords
 */
setConversationalResponse(Game, {Keywords: Responses})  // keyword match or dumb bot response


/** 
 * Returns a chat bot response to a user meessage that may or may not relate to registered keyword responses set by setConversationalResponse()
 * @param {User} - user producing the chat message that we are responding to
 * @param {Game} - game which user is chatting with bot about
 * @param {Message} - message user is sending to the game bot
 * @returns {String} - bot response to user which may or may not relate to keywords the user mentioned in Message
 */
getConversationalResponse(User, Game, Message)


/**
 * Sets string responses for chats when the user's message does not contain any registered keywords 
 * @param {Game|Player|Team} - entity for which to register a dumb chatbot response
 * @param {String} Message - message to send to user when no keywords are matched
 */
setDumbBotResponse([Game, Player, Team], Message)


/**
 * Registers a handler to execute for subscribed users when a specified game action occures
 * @params {Player|Game|Team} - enitity for which subscribed users are targeted 
 * @params {String} GameAction - player/game/team action event for which handler should execute
 * @params {Handler} - somehow describes action to take for subscribed users when player/game/team event occcurs
 */
addGameActionHandler([Player, Game, Team], GameActions, Handler)


/**
 * Regesters a handler to execute for a user when they trigger a particular user event action
 * @param {User} - user to subscibe 
 * @param {String} UserAction - action for which handler should be executed
 * @param {Handler} - handler to execute when user triggers specified action
 */
addUserActionHandler(User, UserAction, Handlers);


/**
 * Sends a message to subscribed users that fit (or do not fit) a described criteria
 * @param {Player|Game|Team} - entity for which desccibed users are targeted
 * @param {GameExperienceCriteria} Criteria - descriptor of game expereience trigger for which to send message to subscribed users
 * @param {String} Message - message to send to users that meet criteria
 * @param {String} [ElseMessage] - optional message to send to users who do not match Criteria
 */
sendMessageToSubscribersWithCriteria([Player|Game|Team], Critera, Message, [ElseMessage])




//***************
//   Events
// ***************

GameActions
  * goes-live

UserActions
  * not-played-in-x-hours
  * about-beat-level-and-stopped
  * beat-level
  * unlocked-acheivement
  * havent-spammed-in-x-hours








