const local = {}
local.save = (key, data) => localStorage.setItem (key, JSON.stringify(data))
local.get = (key) => JSON.parse( localStorage.getItem(key))|| []