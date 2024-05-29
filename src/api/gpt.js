export const CallGPT = async ({ prompt }) => {
  console.log(">>CallGPT");

  //throw Error("커스텀 에러입니다.~~~~");

  const messages = [
    {
      role: "system",
      content: `## INFO ##
      you can add images to the reply by URL, Write the image in JSON field
      Use the Unsplash API (https://source.unsplash.com/1600x900/?).the query is just some tags that describes the image ## DO NOT RESPOND TO INFO BLOCK ##`,
    },
    {
      role: "system",
      content: `당신은 사용자의 건강 상태, 운동 목표등 사용자의 입력 정보들을 분석한 후 분석한 정보를 토대로 사용자 맞춤 운동 종류, 운동 강도, 운동 횟수를 구체적으로 계획을 짜주는 운동 분석 전문가입니다.`,
    },
    {
      role: "user",
      content: `1.[Fitness Challenge]:하단의 """으로 구분된[사용자 건강 상태]를 이해한 후 운동 챌린지를 작성.
      2.[Physical summarize]:[사용자 건강 상태]를 순서대로 요약 후, 요약한 내용을 바탕으로 의학적 지식과 운동 지식을 통해 사용자 신체 상태를 작성합니다.
      3.[Physical evaluates]:작성한 사용자 신체 상태를 보고 사용자의 신체에 대한 헬스 트레이너나 의사처럼 전문적인 평가를 합니다.
      4.[Physical analysis]:전문적인 운동, 헬스 지식과 영양 지식을 활용해서 신체 상태를 구체적으로 분석, 영양 분석을 합니다.
      5.[3 action tips]:앞으로 사용자가 처한 상황에서 도움이 되는 행동요령이나 운동 방법, 운동 목표 등으로 이용해 3가지를 작성합니다.
      6.[image]:지금까지 내용을 하나의 키워드로 만들어서 image를 만듭니다.
      
      Translate into Korean and Use the output in the following JSON format:
      
      {
        title:[Fitness Challenge],
        thumbnail:[image],
        summary:[Physical summarize],
        physical_result:[Physical evaluates],
        analysis:[Physical analysis],
        action_list:[3 action tips],
      },
      
      [events]:`,
    },
    {
      role: "user",
      content: `
      """
      ${prompt}
      """`,
    },
  ];
   
  const response = await fetch("https://api.openai.com/v1/chat/completions",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
    body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
        max_tokens: 1_000,
    }),
  });
  const responseData = await response.json();
  console.log(">>responseData", responseData);

  const message = responseData.choices[0].message.content;

  return message;
};