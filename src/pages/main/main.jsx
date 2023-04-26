import React from 'react';


const Main = () => {

    return (
        <>
        <div class="modal-body" style={{maxWidth: '700px', margin:'auto'}}>
            <div className="row">              
              <div className="col-sm-4">
                    <div class="input-group input-group-dynamic is-filled my-3 ">
                        <label class="form-label">ФИО</label>
                        <input  type="email" class="form-control"/>
                    </div>
              </div>
              <div className="col-sm-4">
                    <div class="input-group input-group-dynamic is-filled my-3 ">
                        <label class="form-label">Дата рождения</label>
                        <input
                       
                      type="email" class="form-control"/>
                    </div>
              </div>      
              <div className="col-sm-4">
                    <div class="input-group input-group-dynamic is-filled my-3 ">
                      <label class="form-label">Телефон</label>
                      <input 
                        
                      type="email" class="form-control"/>
                    </div>
              </div>            
            </div>
            <div className="row">
               <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Логин</label>
                     <input 
                      
                     type="email" class="form-control"/>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Пароль</label>
                     <input type="password" class="form-control"/>
                  </div>
              </div>
              <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">E-mail</label>
                     <input type="email" class="form-control"/>
                  </div>
              </div>
            </div>
            <div className="row">              
              <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Сеть ввода</label>
                     <input 
                    
                     type="email" class="form-control"/>
                  </div>
              </div>
              <div className="col-sm-8">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Кошелек ввода</label>
                     <input 
                   
                     type="email" class="form-control"/>
                  </div>
              </div>
            </div>
            <div className="row">              
              <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Сеть вывода </label>
                     <input 
                    
                     type="email" class="form-control"/>
                  </div>
              </div>
              <div className="col-sm-8">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Кошелек вывода</label>
                     <input 
                    
                     type="email" class="form-control"/>
                  </div>
              </div>
            </div>
            <div className="row">
               <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Задать баланс вручную </label>
                     <input 
                    
                     type="number" class="form-control"/>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div class="input-group input-group-dynamic is-filled my-3 ">
                     <label class="form-label">Тип PNL</label>
                     <select className="form-control"                                        
                                       >                        
                      <option value={1} >Фиксированный</option>                                       
                      <option value={2} >Колеблющийся</option>       
                      </select>
                  </div>
                </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div class="input-group input-group-dynamic">
                    <textarea
                   
                    class="multisteps-form__textarea form-control" rows="5" placeholder="Примечание..." />
                  </div>
              </div>
            </div>
         
            <div className="row">
            <div class="form-check form-check-info text-left">
              <br/>
            <input  class="form-check-input" type="checkbox" />
                    <label class="form-check-label" for="flexCheckDefault">
                    Пользователь активен
                    </label>
            </div>
            </div>
          </div>
      </>
    );
};

export default Main;