const style = {
  body: `
    style="width: 100vw;
    height: 100vh;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;"
`,
  url: 'style="color: #e1e1e1; text-decoration:none;"',
  hr: 'style="width: 50%;"',
};

export const HTML: string = `
<body ${style.body}>
    <h3 ${style.url}>Fastify Api is Running...</h3>
    <hr ${style.hr}>
    <h4>
        <a ${style.url} href="v1/docs">Go To V1 Doc</a>
    </h4>
    <h4>
        <a ${style.url} href="v2/docs">Go To V2 Doc</a>
    </h4>
</body>`;
