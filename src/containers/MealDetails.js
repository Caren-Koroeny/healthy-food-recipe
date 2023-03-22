import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { categories } from '../Redux/Actions/mealActions';
import Loading from '../components/Loading';
import '../styles/Details.css';

const MealDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const details = useSelector((state) => state.setcategory.detail.meals);

  const fetchDetails = useCallback(async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    const res = await axios.get(url);
    dispatch(categories(res.data.meals[0]));
    setLoading(false);
  }, [id, dispatch]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  const { strMeal, strMealThumb, strInstructions } = details;
  return (
    <div className="details-page">
      <div className="img-detail">
        <h3 className="text-center">{strMeal}</h3>
        <img className="img" src={strMealThumb} alt={strMeal} />
      </div>
      <div>
        <h2 className="text-center">INSTRUCTIONS</h2>
        <p className="description">{strInstructions}</p>
      </div>
    </div>
  );
};

export default MealDetails;
