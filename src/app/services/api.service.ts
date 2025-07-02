// Este servicio centraliza todas las llamadas al backend de chatbot_arelia.
// Maneja login, registro, envío de mensajes y gestión del JWT en localStorage.

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

declare global {
    interface Window {
        __env?: {
            baseUrl?: string;
        };
    }
}

const BASE_URL = window?.__env?.baseUrl || environment.baseUrl;

@Injectable({
providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    // Registro de usuario
    register(email: string, password: string): Observable<any> {
        return this.http.post(`${BASE_URL}/register`, { email, password });
    }

    // Login y almacenamiento del token
    login(email: string, password: string): Observable<any> {
        const body = new URLSearchParams();
        body.set('username', email);
        body.set('password', password);

        const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
        });

        return new Observable(observer => {
        this.http.post(`${BASE_URL}/login`, body.toString(), { headers }).subscribe({
            next: (res: any) => {
            localStorage.setItem('token', res.access_token);
            observer.next(res);
            },
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
        });
    }

    updateEmail(newEmail: string): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.put(`${BASE_URL}/update-email`, { new_email: newEmail }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
    }

    updatePassword(newPassword: string): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.put(`${BASE_URL}/update-password`, { new_password: newPassword }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
    }

    deleteAccount(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.delete(`${BASE_URL}/delete-account`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });
    }


    // Enviar mensaje al bot
    sendMessage(content: string): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
        });

        return this.http.post(`${BASE_URL}/chat`, { content }, { headers });
    }

    // Obtener historial (si se implementa en el backend)
    getMessages(): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
        });

        return this.http.get(`${BASE_URL}/messages`, { headers });
        }

    getChatHistory(): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.get(`${BASE_URL}/chat-history`, {
        headers: { Authorization: `Bearer ${token}` }
        });
    }

    sendMessageToBot(message: string): Observable<any> {
        const token = localStorage.getItem('token');
        return this.http.post(`${BASE_URL}/chat`, { content: message }, {
        headers: { Authorization: `Bearer ${token}` }
        });
    }

}
