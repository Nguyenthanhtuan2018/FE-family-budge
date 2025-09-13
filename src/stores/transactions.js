import { defineStore } from 'pinia';
import { api } from '../services/api.js';
export const useTransactions = defineStore('transactions', { state:()=>({items:[],loading:false,error:null}), actions:{ async fetch(params={}){ try{ this.loading=true; const res=await api.get('/api/transactions',{params}); this.items=res.items||[]; }catch(e){ this.error=e.message||'Failed to load'; }finally{ this.loading=false; } }, async create(payload){ const created=await api.post('/api/transactions',payload); this.items.unshift(created.item); return created.item; } } });
