import React from 'react'
import { Card } from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { server } from "../config/index";

export default function PortfolioItems({cat}) {
  return (
        <div className="col-lg-6 col-sm-6">
        <div className="portfolio-items mb-100 mt-50">
        <Link href={`/portfolio/${cat?.portfolio_slug}`}>
                <div>
                <Card>
            <Image
            src={`${server}/${cat?.thambnail_image}`}
            alt={cat?.project_name}
            width={570}
            height={370}
            priority
            />
        </Card>
        <div className="portfolio-info">
            <h2>{cat?.project_name}</h2>
            <div>
            {/* <Link href={`/portfolio/${cat?.portfolio_slug}`}> */}
                <a>
                View Projects <FaAngleRight />
                </a>
            {/* </Link> */}
            </div>
        </div>
                </div>
        </Link>
        </div>
    </div>
  )
}
