SpixiAppSdk.onInit = function(sessionId, userAddresses) {
  document.getElementById('game-area').innerHTML = '<p>Connected. Waiting for IXI deposits...</p>';
  console.log('Session started:', sessionId, userAddresses);
};

SpixiAppSdk.onNetworkData = function(sender, data) {
  console.log('Data from', sender, ':', data);
  // Basic game flow would go here
};
