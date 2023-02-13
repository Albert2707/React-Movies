import { pool } from "../util/db.js";

export const GetMovies = (req, res, next) => {
  try {
    const q = "select * from Movies order by id desc";
    pool
      .query(q)
      .then((data) => {
        const [result] = data;

        return res.status(200).json(result);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetMovieById = (req, res, next) => {
  const { id } = req.params;

  const q = "select * from Movies where id = ?";
  const values = [id];
  pool
    .query(q, values)
    .then((data) => {
      const [result] = data;

      return res.status(200).json(result);
    })
    .catch((error) => {
      return res.status(500).json(error);
    });
};

export const GetMovieByGender = (req, res, next) => {
  const { gender } = req.params.gender;
};
