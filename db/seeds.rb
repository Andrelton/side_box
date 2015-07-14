User.create(
  username: "Andrelton",
  password_hash: "dbc",
  first_name: "Eric",
  email: "eric@party.biz"
)

Share.create(
  user_id: 1,
  path: "atomic",
  title: "Atomic CSS Cheat Sheet",
  link: "http://docs.emmet.io/cheat-sheet/"
)

Share.create(
  user_id: 1,
  path: "puppies",
  title: "lebron article",
  link: "http://espn.go.com/nba/story/_/id/13245985/lebron-james-cleveland-cavaliers-says-nightmares-nba-finals-loss",
)
