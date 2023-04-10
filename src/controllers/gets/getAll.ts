import { Request, Response } from "express";

import UniversityRepository from "../../repositories";

const getAllUniversity = async (req: Request, res: Response) => {
  const country = req.query.country;
  const pag = req.params.pagination;
  let items = [];
  let result = [];
  if (!country) {
    const allUniversity = await new UniversityRepository().getAll();

    items = allUniversity;
  } else {
    if (country === "argentina") {
      const argentina = await new UniversityRepository().getAllInArgentina();
      items = argentina;
    } else if (country === "brasil") {
      const brasil = await new UniversityRepository().getAllInBrasil();
      items = brasil;
    } else if (country === "chile") {
      const chile = await new UniversityRepository().getAllInchile();
      items = chile;
    } else if (country === "colombia") {
      const colombia = await new UniversityRepository().getAllInColombia();
      items = colombia;
    } else if (country === "paraguai") {
      const paraguai = await new UniversityRepository().getAllInParaguai();
      items = paraguai;
    } else if (country === "peru") {
      const peru = await new UniversityRepository().getAllInPeru();
      items = peru;
    } else if (country === "suriname") {
      const suriname = await new UniversityRepository().getAllInSuriname();
      items = suriname;
    } else if (country === "uruguai") {
      const uruguay = await new UniversityRepository().getAllInUruguay();
      items = uruguay;
    } else {
      return res.status(404).json({ err: "country is not in database" });
    }
  }

  let totalPage = Math.ceil(items.length / 20);

  let count: number;

  if (!pag || parseInt(pag) <= 0) count = 1 * 20 - 20;
  else count = parseInt(pag) * 20 - 20;

  let delimiter = count + 20;

  if (parseInt(pag) <= totalPage)
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) result.push(items[i]);
      count++;
    }

  return res.status(200).json(result);
};

export default getAllUniversity;
