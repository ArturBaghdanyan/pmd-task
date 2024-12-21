import React from 'react'


const CardList = ({data}) => {
  return (
		<div>
			<h2>Card list</h2>

			<div> 

				{data.map(i => (
					<div key={i.id}>
						{i.firstItem.map(j => (
							<div key={j.id}>
								{j.icon ? (
									<div>
										<img src={j.icon} alt="icon" />
									</div>
								) : null} 
								
								<div>
									<h4>{j.title}</h4>
									<p>{j.text}</p>
								</div>
								{j.button ? (
									<div>
										<button>{j.button}</button>
									</div>
								) : null} 
							</div>
						))}
						{i.secItem.map(k => (
							<div key={k.id}>
								{k.icon ? (
									<div>
										<img src={k.icon} alt="icon" />
									</div>
								) : null} 
								<div>
									<h4>{k.title}</h4>
									<p>{k.text}</p>
								</div>
								{k.button ? (
									<div>
										<button>{k.button}</button>
									</div>
								) : null} 
							</div>
						))}
						{i.thirdItem.map(m => (
							<div key={m.id}>
								{m.icon ? (
									<div>
										<img src={m.icon} alt="icon" />
									</div>
								) : null} 
								<div>
									<h4>{m.title}</h4>
									<p>{m.text}</p>
								</div>
								{m.button ? (
									<div>
										<button>{m.button}</button>
									</div>
								) : null} 
							</div>
						))}
					</div>
				))} 

			</div>
		</div>
  )
}

export default CardList