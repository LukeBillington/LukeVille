export const connectionState = ({ status }) => {
  return { type: 'UPDATE_CONNECTION_STATUS', isConnected: status };
}
