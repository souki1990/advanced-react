
import DataApi from 'state-api';
import {data} from '../testData';

const api=new DataApi(data);

describe('DataApi',()=>{

    it('exposes articles as objects',()=>{

        const articles=api.getArticles();
        const articleId=articles[0].id;
        expect(articles).toHaveProperty(articleId);

    });

    it('exposes authors as objects',()=>{

    });
    
})
