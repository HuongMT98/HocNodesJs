// File config mongodb
import { MongoClient } from "mongodb"
import env from "./environment.js"

let databaseInstance = null

// Connect to the database
const CONNECT_DB = async () => {
  try {
    const client = await MongoClient.connect(env.MONGODB_URL, {
      // useNewUrlParser: false,
      // useUnifiedTopology: true,
    })
    console.log("-> Message Configs MongoDB: Đã kết nối được MongoDB <-")

    return client
  } catch (error) {
    console.error(
      "-> Message Configs MongoDB: Kết nối bị lỗi hãy kiểm tra lại! <-",
      error
    )
    throw error
  }
}

const GET_DB = () => {
  if (!databaseInstance) {
    throw new Error(
      "->Message Configs MongoDB: Database chưa được kết nối để có thể lấy dữ liệu! <-"
    )
  } else {
    return databaseInstance
  }
}

export { CONNECT_DB, GET_DB }
