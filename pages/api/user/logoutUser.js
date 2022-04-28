import Cookies from 'js-cookie'

export default async (req, res) => {
  try {
    Cookies.remove("token"); 
    res.status(200).json({ err: "Vous avez été déconnecté avec succès" });
  } catch (err) {
    res.status(403).json({ err: "Problème lors de la connexion" });
  }

};