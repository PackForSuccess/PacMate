const userController = {};

tripController.getChecklist = (req, res) => {
let user_id = 3;
let climate = 2;
let occasion = 2;
const getChecklistQuery = `
Select (description) from items where (user_id = 1 or user_id = ${user_id}) and (climate = 5 or climate = ${climate}) and (occasion = 5 or occasion = ${occasion});`;
db.query(getChecklistQuery, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result);
    }
  })
}

module.exports = userController;