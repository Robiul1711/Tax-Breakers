"use server"
import teamData from '../../../public/team.json';

export const getAllTeamMember = async () => {
    try {
        return teamData;
    } catch (error: any) {
        return Error(error)
    }
}