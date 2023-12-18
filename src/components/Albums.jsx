import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Albums() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Выполните запрос к JSONPlaceholder API для получения данных об альбомах
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
                setAlbums(response.data.slice(1, 10));
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });
    }, []);

    return (
        <div>
            <h1>Список альбомов и фотографий</h1>
            {albums.map((album) => (
                <div key={album.id}>
                    <h2>{album.title}</h2>
                    <AlbumPhotos albumId={album.id} />
                </div>
            ))}
        </div>
    );
}

function AlbumPhotos({ albumId }) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => {
                setPhotos(response.data.slice(0, 2));
            })
            .catch((error) => {
                console.error('Ошибка при загрузке данных:', error);
            });

    }, [albumId]);

    return (
        <div>
            <ul>
                {photos.map((photo) => (
                    <li key={photo.id}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Albums;