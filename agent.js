

module.exports = agent => {
  // 也可以通过 messenger 对象发送消息给 App Worker
  // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
  agent.messenger.on('egg-ready', () => {
    const data = {};
    agent.messenger.sendToApp('agent_action', data);
  });

  agent.messenger.on('app-event', (data) => {
    console.log(`Agent received App message: [app-event] %o`, data);
  });
};
