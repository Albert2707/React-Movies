import { pool } from "../util/db.js";
import moment from "moment";
export const PostAddMovie = (req, res, next) => {
  const { name, img, description, gender, color } = req.body;
  const q =
    "INSERT INTO Movies(`name`, `img`, `state`, `description`, `gender`, `createAt`,`color`) VALUES(?)";
  const values = [
    name,
    img,
    "activa",
    description,
    gender,
    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    color,
  ];
  pool
    .query(q, [values])
    .then(() => {
      return res.status(200).json("Registro insertado con exito");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

export const PostDeleteMovie = (req, res, next) => {
  const { id } = req.body;

  const q = "DELETE FROM Movies where id = ?";
  const values = [id];
  pool
    .query(q, values)
    .then(() => {
      return res.status(200).json("Registro Eliminado con exito");
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
};

export const PutUpdateMovie = (req, res, next) => {
  try {
    const { id, name, img, description, gender } = req.body;
    const q =
      "update Movies set `name`=?, `img`=?, `description` =? , `gender`=? where id =?";
    const values = [name, img, description, gender, id];
    pool
      .query(q, values)
      .then(() => {
        res.status(200).json("Registro actualizado con exito");
      })
      .catch((err) => {
        res.status(500).json("base de datos");
      });
  } catch (error) {
    res.status(500).json("Errror tu ta loco");
  }
};
