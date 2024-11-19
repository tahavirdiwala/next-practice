enum DefaultPagination {
  page = 1,
  limit = 100,
}

const RESPONSE_MESSAGE = {
  users: {
    add: "User Created SuccessFully",
    getAll: "Users Fetched SuccessFully",
    edit: "User Updated SuccessFully",
    delete: "User Deleted SuccessFully",
  },
  roles: {
    add: "Role Created SuccessFully",
    getAll: "Roles Fetched SuccessFully",
    get: "Role Fetched SuccessFully",
  },
};

export { DefaultPagination, RESPONSE_MESSAGE };
