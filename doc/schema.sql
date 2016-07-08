
# A MODD User, that may have multiple entries in IM_Users
CREATE TABLE users (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  username VARCHAE,       # username on MODD
  first_name VARCHAR,
  last_name VARCHAR,      

  created DATETIME,
  updated TIMESTAMP
)

# A maping of IM account to an IM service
CREATE TABLE im_accounts (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  user_id UNSIGNED INT NOT NULL,  # forign key into users table

  username VARCHAR(?) NOT NULL,   # user's account name on the IM service
  chat_id VARCHAR(?),             # optional field to identify account on im
  service VARCHAR(5) NOT NULL,

  created DATETIME,
  updated TIMESTAMP
)


CREATE TABLE gamer_tags (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  user_id UNSIGNED INT NOT NULL,    # foreign key to users table

  gamer_name VARCHAR(?) NOT NULL,   # player name on game, network, or device
  game_id   UNSIGNED INT NOT NULL,  # forign key to game table for game, network, or device 

  created DATETIME,
  updated TIMESTAMP
)



# A game, game network, or device that a user can be playing or have a subscription on.
CREATE TABLE games {
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(?) NOT NULL,    # name of game, game network, or game device
  type VARCHAR(?) NOT NULL,    # symbol for whether this is a game, game network, or game device

  created DATETIME,
  updated TIMESTAMP
}


# maps users to followables (entites that can be followed like players, games, or teams)
CREATE TABLE followers (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  user_id UNSIGNED INT NOT NULL,            # foreign key to users table
  followable_id UNSIGNED INT NOT NULL,      # foreign key to followable table

  created DATETIME,
  updated TIMESTAMP
)


# Entities that can be followed by users (players, games, or teams)
CREATE TABLE followables (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(?) NOT NULL,       # code for entity that can be followed (player, game, team)
  name VARCHAR(?) NOT NULL,       # name of entity that can be followed

  created DATETIME,
  updated TIMESTAMP
)


# names of actions that can happen for a game, player, or team that a user can subscribe to
CREATE TABLE actions (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(?) NOT NULL,       # name of event that a user can subscribe to for a player, team or game

  created DATETIME,
  updated TIMESTAMP
)


# subscribes a user to a subscrible action of a followable entity
CREATE TABLE action_subscriptions (
  id UNSIGNED INT NOT NULL AUTO_INCREMENT,
  action_id UNSIGNED INT NOT NULL,         # action being subscribed to,  (null for all actions?)
  followable_id UNSIGNED INT NOT NULL,     # entity producing the action to subscribe to 
  user_id UNSIGNED INT NOT NULL,           # user subscribing to the action by the followable entity

  created DATETIME,
  updated TIMESTAMP
)


