import './SponsorTerms.scss'

const SponsorTerms = ({ name, description }) => {
    return (
        <div className='sponsorTerms'>

            <div className='sponsorTerms__list'>
                <span className='sponsorTerms__list__name'>{name}</span>
                <span className='sponsorTerms__list__desc'>-{description}</span>
            </div>

        </div>
    )
}

export default SponsorTerms