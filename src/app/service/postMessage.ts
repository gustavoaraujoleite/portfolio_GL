type UserInfoType = {
  data: DataType;
};
type DataType = {
  fullname: string;
  email: string;
  message: string;
};
export default async function postMessage(userInfo: UserInfoType) {
  try {
    const url: string = process.env.NOTION_URL as string;
    const db_authorization = process.env.NOTION_API_KEY;
    const db_id = process.env.NOTION_DB_ID;

    const { data } = userInfo;

    const response = await fetch(url, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${db_authorization}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: db_id },
        properties: {
          name: {
            title: [{ text: { content: data.fullname } }],
          },
          email: {
            email: data.email,
          },
          message: {
            rich_text: [{ text: { content: data.message } }],
          },
        },
      }),
    });

    if (response.status !== 200) {
      return {
        status: response.status,
        message: response.statusText,
      };
    }
    return {
      status: 200,
      response: "success",
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      response: error,
    };
  }
}
