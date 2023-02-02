import React, {useState} from 'react'
import data from './data.js'
import "./Search.css"

const Search = () => {
    const [filter, setFilter] = useState('');
    const searchText = (event) =>{
        setFilter(event.target.value);
    }
    // console.warn(filter);
    let dataSearch = data.carddata.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })

  return (
    <section className='py-4 container'>
        <div className='row justify-content-center'>

            <div className='col-12 mb-5 '>
                <div className='mb-3 col-6 mx-auto text-center'>
                    <input
                        className="form-control me-2 "
                        id='searching'
                        type="search"
                        placeholder="Search name,position,team.."
                        aria-label="Search"
                        autoFocus = "on"
                        autoComplete='on'
                        value={filter}
                        onChange = {searchText.bind(this)}
                    />
                </div>
            </div>

            {dataSearch.map((item,index)=>{
                return(
                    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                        <div className='card overflow-hidden p-0 h-100 shadow'>
                            <img
                                src="https://images.unsplash.com/photo-1519819286236-0b3c6506e475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.Name}</h5>
                                <h6 className="card-text">{item.Position} - {item.Team}</h6>
                            </div>
                            <div class="card-body">
                                <a href={item.Instagram} className="card-link">
                                    Instagram
                                </a>
                                <a href={item.Facebook} className="card-link">
                                    Facebook
                                </a>
                                <a href={item.Twitter} className="card-link">
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}
export default Search;