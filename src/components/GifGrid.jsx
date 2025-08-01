import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifItem } from '../components/GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Loading ...............</h2>)
            }
            <div className="card-grid"> 
                {
                    images.map((image) => (
                        <GifItem 
                          {... image}
                        />
                    ))
                }
            </div>
        </div>
  )
}
