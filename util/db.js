import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "us-east.connect.psdb.cloud",
  user: "p2bvg0qfntu9l933yk1r",
  database: "tasksdb",
  password: "pscale_pw_bb3lbrMFlBgGwmvBEjYzfJzNb2bDfo0X60CR6EHoAkH",
  ssl:{
    rejectUnauthorized:false
}
});
