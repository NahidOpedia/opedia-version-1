import React from 'react'
import { Card } from "react-bootstrap";
import Link from "next/link";

import { server } from "../config";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

export default function TrainingItem({course}) {
  return (
        <div  className="col-lg-6 col-sm-6">
            <Link href={`/training/${course.slug}`}>
            <div className="portfolio-items mb-100">
            <Card>
                <Image
                src={`${server}/${course.Featured_img}`}
                alt={course.course_name}
                width={400}
                height={367}
                priority
                />
            </Card>
            <div className="portfolio-info">
                
                <h2>{course.course_name}</h2>
                <div>
                <Link href={`/training/${course.slug}`}>
                    <a>
                    View details <FaAngleRight />
                    </a>
                </Link>
                </div>
            </div>
            </div>
            </Link>
        </div>
  )
}
