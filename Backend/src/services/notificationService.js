const notifyStatusChange = (candidateEmail, status) => {
  console.log(`Notify ${candidateEmail}: application status changed to ${status}`);
};

module.exports = { notifyStatusChange };
