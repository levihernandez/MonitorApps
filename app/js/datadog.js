/*
The code below is auto generated when registering a new app in Datadog:
https://app.datadoghq.com/rum/application

The clienToken & applicationId are auto generated.

To enable APM for end to end observability configure 'allowedTracingOrigins'

*/
  (function(h,o,u,n,d) {
    h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
    d=o.createElement(u);d.async=1;d.src=n
    n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
  })(window,document,'script','https://www.datadoghq-browser-agent.com/datadog-rum.js','DD_RUM')
  DD_RUM.onReady(function() {
    DD_RUM.init({
      clientToken: '<dd-token>',
      applicationId: '<dd-app-id>',
      site: 'datadoghq.com',
      service: 'AngularJS',
      env: 'development',
      //  version: '1.0.0',
      sampleRate: 100,
      trackInteractions: true,
      // Enable APM tracing on the RUM transaction
      allowedTracingOrigins: ["http://localhost"]
    })
  })