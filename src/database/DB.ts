import { Dexie, type EntityTable } from 'dexie';
import Event from './model/Event'

export default class DB{
    db;
    constructor() {
        this.db = new Dexie('MyDay') as Dexie & {
            events: EntityTable<Event, 'id'>;
        };
        this.db.version(1).stores({
          events: '++id, label, startsDate',
        });
    }
    async addEvent(data){
        await this.db.events.add(data);
    }
    async findByDate(date){
        const data = await this.db.events
        .where({startsDate:date})
        .toArray();
        return data
    }
    
}