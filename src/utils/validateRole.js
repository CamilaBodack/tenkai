export default function hasRole(rolesNeeded, rolesUser) {
  for (let i = 0; i < rolesUser.length; i++) {
    if (typeof rolesNeeded === 'string') {
      if (rolesNeeded === rolesUser[i]) {
        return true;
      }
    } else if (rolesNeeded.includes(rolesUser[i])) {
      return true;
    }
  }
  return false;
}
